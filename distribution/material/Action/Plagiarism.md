# Plagiarism


```text
material/Action/Plagiarism
```

```text
include('material/Action/Plagiarism')
```



| Illustration | Plagiarism |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Plagiarism.png) | ![illustration for Plagiarism](../../material/Action/Plagiarism.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlagiarismXs>`
- `<$PlagiarismSm>`
- `<$PlagiarismMd>`
- `<$PlagiarismLg>`





## Plagiarism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Plagiarism
include('material/Action/Plagiarism')

' renders the element
Plagiarism('Plagiarism', 'Plagiarism', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Plagiarism
include('material/Action/Plagiarism')

' renders the element
Plagiarism('Plagiarism', 'Plagiarism', 'an optional tech label', 'an optional description')
@enduml
```

