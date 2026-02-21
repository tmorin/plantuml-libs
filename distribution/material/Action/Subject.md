# Subject


```text
material/Action/Subject
```

```text
include('material/Action/Subject')
```



| Illustration | Subject |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Subject.png) | ![illustration for Subject](../../material/Action/Subject.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubjectXs>`
- `<$SubjectSm>`
- `<$SubjectMd>`
- `<$SubjectLg>`





## Subject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Subject
include('material/Action/Subject')

' renders the element
Subject('Subject', 'Subject', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Subject
include('material/Action/Subject')

' renders the element
Subject('Subject', 'Subject', 'an optional tech label', 'an optional description')
@enduml
```

