var nok=0;

		function check_me()
		{
		    var count=0
		    with(document.test)
			{
			if (!Q1[0].checked&&!Q1[1].checked&&!Q1[2].checked&&!Q1[3].checked&&!Q1[4].checked&&document.getElementById('vopros1').style.display == "block"){count+=1};  
			if (!Q2[0].checked&&!Q2[1].checked&&!Q2[2].checked&&!Q2[3].checked&&!Q2[4].checked&&document.getElementById('vopros2').style.display == "block"){count+=1};  
			if (!Q3[0].checked&&!Q3[1].checked&&!Q3[2].checked&&!Q3[3].checked&&!Q3[4].checked&&document.getElementById('vopros3').style.display == "block"){count+=1};  
			if (!Q4[0].checked&&!Q4[1].checked&&!Q4[2].checked&&!Q4[3].checked&&!Q4[4].checked&&document.getElementById('vopros4').style.display == "block"){count+=1};  
			if (!Q5[0].checked&&!Q5[1].checked&&!Q5[2].checked&&!Q5[3].checked&&!Q5[4].checked&&document.getElementById('vopros5').style.display == "block"){count+=1};  
			if (!Q6[0].checked&&!Q6[1].checked&&!Q6[2].checked&&!Q6[3].checked&&!Q6[4].checked&&document.getElementById('vopros6').style.display == "block"){count+=1};  
			if (!Q7[0].checked&&!Q7[1].checked&&!Q7[2].checked&&!Q7[3].checked&&!Q7[4].checked&&document.getElementById('vopros7').style.display == "block"){count+=1};  
			if (!Q8[0].checked&&!Q8[1].checked&&!Q8[2].checked&&!Q8[3].checked&&!Q8[4].checked&&document.getElementById('vopros8').style.display == "block"){count+=1};  
			if (!Q9[0].checked&&!Q9[1].checked&&!Q9[2].checked&&!Q9[3].checked&&!Q9[4].checked&&document.getElementById('vopros9').style.display == "block"){count+=1};  
			if (!Q10[0].checked&&!Q10[1].checked&&!Q10[2].checked&&!Q10[3].checked&&!Q10[4].checked&&document.getElementById('vopros10').style.display == "block"){count+=1};
			if (!Q11[0].checked&&!Q11[1].checked&&!Q11[2].checked&&!Q11[3].checked&&!Q11[4].checked&&document.getElementById('vopros11').style.display == "block"){count+=1};
			if (!Q12[0].checked&&!Q12[1].checked&&!Q12[2].checked&&!Q12[3].checked&&!Q12[4].checked&&document.getElementById('vopros12').style.display == "block"){count+=1};
			if (!Q13[0].checked&&!Q13[1].checked&&!Q13[2].checked&&!Q13[3].checked&&!Q13[4].checked&&document.getElementById('vopros13').style.display == "block"){count+=1};
			if (!Q14[0].checked&&!Q14[1].checked&&!Q14[2].checked&&!Q14[3].checked&&!Q14[4].checked&&document.getElementById('vopros14').style.display == "block"){count+=1};
			if (!Q15[0].checked&&!Q15[1].checked&&!Q15[2].checked&&!Q15[3].checked&&!Q15[4].checked&&document.getElementById('vopros15').style.display == "block"){count+=1};
			if (!Q16[0].checked&&!Q16[1].checked&&!Q16[2].checked&&!Q16[3].checked&&!Q16[4].checked&&document.getElementById('vopros16').style.display == "block"){count+=1};
			if (!Q17[0].checked&&!Q17[1].checked&&!Q17[2].checked&&!Q17[3].checked&&!Q17[4].checked&&document.getElementById('vopros17').style.display == "block"){count+=1};
			if (!Q18[0].checked&&!Q18[1].checked&&!Q18[2].checked&&!Q18[3].checked&&!Q18[4].checked&&document.getElementById('vopros18').style.display == "block"){count+=1};
			if (!Q19[0].checked&&!Q19[1].checked&&!Q19[2].checked&&!Q19[3].checked&&!Q19[4].checked&&document.getElementById('vopros19').style.display == "block"){count+=1};
			if (!Q20[0].checked&&!Q20[1].checked&&!Q20[2].checked&&!Q20[3].checked&&!Q20[4].checked&&document.getElementById('vopros20').style.display == "block"){count+=1};
			if (!Q21[0].checked&&!Q21[1].checked&&!Q21[2].checked&&!Q21[3].checked&&!Q21[4].checked&&document.getElementById('vopros21').style.display == "block"){count+=1};
			if (!Q22[0].checked&&!Q22[1].checked&&!Q22[2].checked&&!Q22[3].checked&&!Q22[4].checked&&document.getElementById('vopros22').style.display == "block"){count+=1};
			if (!Q23[0].checked&&!Q23[1].checked&&!Q23[2].checked&&!Q23[3].checked&&!Q23[4].checked&&document.getElementById('vopros23').style.display == "block"){count+=1};
			if (!Q24[0].checked&&!Q24[1].checked&&!Q24[2].checked&&!Q24[3].checked&&!Q24[4].checked&&document.getElementById('vopros24').style.display == "block"){count+=1};
			if (!Q25[0].checked&&!Q25[1].checked&&!Q25[2].checked&&!Q25[3].checked&&!Q25[4].checked&&document.getElementById('vopros25').style.display == "block"){count+=1};
			if (!Q26[0].checked&&!Q26[1].checked&&!Q26[2].checked&&!Q26[3].checked&&!Q26[4].checked&&document.getElementById('vopros26').style.display == "block"){count+=1};
			if (!Q27[0].checked&&!Q27[1].checked&&!Q27[2].checked&&!Q27[3].checked&&!Q27[4].checked&&document.getElementById('vopros27').style.display == "block"){count+=1};
			if (!Q28[0].checked&&!Q28[1].checked&&!Q28[2].checked&&!Q28[3].checked&&!Q28[4].checked&&document.getElementById('vopros28').style.display == "block"){count+=1};
			if (!Q29[0].checked&&!Q29[1].checked&&!Q29[2].checked&&!Q29[3].checked&&!Q29[4].checked&&document.getElementById('vopros29').style.display == "block"){count+=1};
			if (!Q30[0].checked&&!Q30[1].checked&&!Q30[2].checked&&!Q30[3].checked&&!Q30[4].checked&&document.getElementById('vopros30').style.display == "block"){count+=1};

			if (count>0) 
			    {alert("Вы выполнили не все задания. Проверьте себя!")  } 
			        else konec()
			}
		} 


		function start_test() 
		{
			nok = 0;
			document.getElementById('the_end').style.display = "none";
			document.getElementById('kn_pr').style.display = "block";
			var questions = document.getElementsByClassName("question");
			var questionsArray = Array.from(questions);

			for(var i=0;i<10;i++) 
			{
			    var ran = Math.floor(Math.random() * questionsArray.length);
			    questionsArray[ran].style.display = "block"; 
			    questionsArray.splice(ran,1);
			}
			document.getElementById('instruction').style.display = "none";
		}

		function control(k, f1,f2,f3,f4,f5) {
			if (k==1&&f1.checked) return true;
			if (k==2&&f2.checked) return true;
			if (k==3&&f3.checked) return true;
			if (k==4&&f4.checked) return true;
			if (k==5&&f5.checked) return true;

			return false;
		}

		function konec()
		{
			var questions = document.getElementsByClassName("question");
			var questionsArray = Array.from(questions);

			for(var i=0;i<30;i++) 
			{
			    var ran = Math.floor(Math.random() * questionsArray.length);
			    questionsArray[ran].style.display = "none"; 
			    questionsArray.splice(ran,1);
			}
			document.getElementById('the_end').style.display = "block";
			document.getElementById('kn_pr').style.display = "none";

			answ="";
		     with(document)
		    {
				nok+=control(1 ,test.Q1[0],test.Q1[1],test.Q1[2],test.Q1[3],test.Q1[4])?1:0
				nok+=control(2 ,test.Q2[0],test.Q2[1],test.Q2[2],test.Q2[3],test.Q2[4])?1:0
				nok+=control(3 ,test.Q3[0],test.Q3[1],test.Q3[2],test.Q3[3],test.Q3[4])?1:0
				nok+=control(4 ,test.Q4[0],test.Q4[1],test.Q4[2],test.Q4[3],test.Q4[4])?1:0
				nok+=control(5 ,test.Q5[0],test.Q5[1],test.Q5[2],test.Q5[3],test.Q5[4])?1:0
				nok+=control(1 ,test.Q6[0],test.Q6[1],test.Q6[2],test.Q6[3],test.Q6[4])?1:0
				nok+=control(2 ,test.Q7[0],test.Q7[1],test.Q7[2],test.Q7[3],test.Q7[4])?1:0
				nok+=control(3 ,test.Q8[0],test.Q8[1],test.Q8[2],test.Q8[3],test.Q8[4])?1:0
				nok+=control(4 ,test.Q9[0],test.Q9[1],test.Q9[2],test.Q9[3],test.Q9[4])?1:0
				nok+=control(5 ,test.Q10[0],test.Q10[1],test.Q10[2],test.Q10[3],test.Q10[4])?1:0
				nok+=control(1 ,test.Q11[0],test.Q11[1],test.Q11[2],test.Q11[3],test.Q11[4])?1:0
				nok+=control(2 ,test.Q12[0],test.Q12[1],test.Q12[2],test.Q12[3],test.Q12[4])?1:0
				nok+=control(3 ,test.Q13[0],test.Q13[1],test.Q13[2],test.Q13[3],test.Q13[4])?1:0
				nok+=control(4 ,test.Q14[0],test.Q14[1],test.Q14[2],test.Q14[3],test.Q14[4])?1:0
				nok+=control(5 ,test.Q15[0],test.Q15[1],test.Q15[2],test.Q15[3],test.Q15[4])?1:0
				nok+=control(1 ,test.Q16[0],test.Q16[1],test.Q16[2],test.Q16[3],test.Q16[4])?1:0
				nok+=control(2 ,test.Q17[0],test.Q17[1],test.Q17[2],test.Q17[3],test.Q17[4])?1:0
				nok+=control(3 ,test.Q18[0],test.Q18[1],test.Q18[2],test.Q18[3],test.Q18[4])?1:0
				nok+=control(4 ,test.Q19[0],test.Q19[1],test.Q19[2],test.Q19[3],test.Q19[4])?1:0
				nok+=control(5 ,test.Q20[0],test.Q20[1],test.Q20[2],test.Q20[3],test.Q20[4])?1:0
				nok+=control(1 ,test.Q21[0],test.Q21[1],test.Q21[2],test.Q21[3],test.Q21[4])?1:0
				nok+=control(2 ,test.Q22[0],test.Q22[1],test.Q22[2],test.Q22[3],test.Q22[4])?1:0
				nok+=control(3 ,test.Q23[0],test.Q23[1],test.Q23[2],test.Q23[3],test.Q23[4])?1:0
				nok+=control(4 ,test.Q24[0],test.Q24[1],test.Q24[2],test.Q24[3],test.Q24[4])?1:0
				nok+=control(5 ,test.Q25[0],test.Q25[1],test.Q25[2],test.Q25[3],test.Q25[4])?1:0
				nok+=control(1 ,test.Q26[0],test.Q26[1],test.Q26[2],test.Q26[3],test.Q26[4])?1:0
				nok+=control(2 ,test.Q27[0],test.Q27[1],test.Q27[2],test.Q27[3],test.Q27[4])?1:0
				nok+=control(3 ,test.Q28[0],test.Q28[1],test.Q28[2],test.Q28[3],test.Q28[4])?1:0
				nok+=control(4 ,test.Q29[0],test.Q29[1],test.Q29[2],test.Q29[3],test.Q29[4])?1:0
				nok+=control(5 ,test.Q30[0],test.Q30[1],test.Q30[2],test.Q30[3],test.Q30[4])?1:0

				showResult();
		    }
		}

		function showResult()
		{
			document.getElementById('rezult').innerHTML = "<span>Вы ответили на "+nok+" из 10 вопросов правильно.</span>";
		}

