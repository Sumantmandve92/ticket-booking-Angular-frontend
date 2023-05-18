import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bus } from 'src/app/classes/bus';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  constructor(public serve:ServiceService) { }

  ngOnInit(): void {
  }
  busnumber: string = "";
  busname: string = "";
  buscategory: string = "";
  acnoac: string = "";
  seats: number = 0;

  addNewBus() {
   
    let newbus = {
      busnumber: this.busnumber,
      busname: this.busname,
      busownerid:this.serve.username,
      buscategory: this.buscategory,
      acnoac: this.acnoac,
      seats: this.seats
    }
this.serve.http.post(this.serve.url+"a2ddnewBus/"+this.serve.tokan,newbus).subscribe(
  (num:number)=>
  {
  
    if(num==1)
    {
      window.alert("Bus registration done");
    }
    else if(num==-1)
    {
      window.alert("Bus already registered");
    }
    else
    {
      window.alert("SWR");
    }
 
  }
);
    
  }
// =====================================================================================================================
// file upload
selectedFile:File;
  onFileChanged(event)
  {
this.selectedFile = event.target.files[0];
console.warn(this.selectedFile);
  }
  onUpload()
  {
    console.warn(this.selectedFile);

    const uploadImageData= new FormData();
    uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name);

    this.serve.http.post(this.serve.url+"u2ploadfile/"+this.serve.tokan,uploadImageData,{observe:'response'}).subscribe(
      (response)=>
      {
        window.alert("image uploaded successfully");
        console.warn(response);
      }
    );

  }
// =====================================================================================================================
}

