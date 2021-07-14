# Plagiarism


```text
material-4/Action/Plagiarism
```

```text
include('material-4/Action/Plagiarism')
```



| Illustration | Plagiarism |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Plagiarism.png) | ![illustration for Plagiarism](../../material-4/Action/Plagiarism.Local.png) |




## Plagiarism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Plagiarism
include('material-4/Action/Plagiarism')

' renders the element
Plagiarism('Plagiarism', 'Plagiarism', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Plagiarism
include('material-4/Action/Plagiarism')

' renders the element
Plagiarism('Plagiarism', 'Plagiarism', 'an optional tech label')
@enduml
```

