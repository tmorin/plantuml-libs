# AttachEmail


```text
material-4/File/AttachEmail
```

```text
include('material-4/File/AttachEmail')
```



| Illustration | AttachEmail |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/AttachEmail.png) | ![illustration for AttachEmail](../../material-4/File/AttachEmail.Local.png) |




## AttachEmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AttachEmail
include('material-4/File/AttachEmail')

' renders the element
AttachEmail('AttachEmail', 'Attach Email', 'an optional tech label')
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

' loads the Item which embeds the element AttachEmail
include('material-4/File/AttachEmail')

' renders the element
AttachEmail('AttachEmail', 'Attach Email', 'an optional tech label')
@enduml
```

