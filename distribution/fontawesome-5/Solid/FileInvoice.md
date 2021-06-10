# FileInvoice


```text
fontawesome-5/Solid/FileInvoice
```

```text
include('fontawesome-5/Solid/FileInvoice')
```



| Illustration | FileInvoice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileInvoice.png) | ![illustration for FileInvoice](../../fontawesome-5/Solid/FileInvoice.Local.png) |




## FileInvoice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileInvoice
include('fontawesome-5/Solid/FileInvoice')

' renders the element
FileInvoice('FileInvoice', 'File Invoice', 'an optional tech label')
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

' loads the Item which embeds the element FileInvoice
include('fontawesome-5/Solid/FileInvoice')

' renders the element
FileInvoice('FileInvoice', 'File Invoice', 'an optional tech label')
@enduml
```

