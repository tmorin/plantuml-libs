# FileSignature


```text
fontawesome-5/Solid/FileSignature
```

```text
include('fontawesome-5/Solid/FileSignature')
```



| Illustration | FileSignature |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileSignature.png) | ![illustration for FileSignature](../../fontawesome-5/Solid/FileSignature.Local.png) |




## FileSignature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileSignature
include('fontawesome-5/Solid/FileSignature')

' renders the element
FileSignature('FileSignature', 'File Signature', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileSignature
include('fontawesome-5/Solid/FileSignature')

' renders the element
FileSignature('FileSignature', 'File Signature', 'an optional tech label')
@enduml
```

