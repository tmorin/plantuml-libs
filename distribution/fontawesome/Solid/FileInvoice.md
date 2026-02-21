# FileInvoice


```text
fontawesome/Solid/FileInvoice
```

```text
include('fontawesome/Solid/FileInvoice')
```



| Illustration | FileInvoice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileInvoice.png) | ![illustration for FileInvoice](../../fontawesome/Solid/FileInvoice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileInvoiceXs>`
- `<$FileInvoiceSm>`
- `<$FileInvoiceMd>`
- `<$FileInvoiceLg>`





## FileInvoice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileInvoice
include('fontawesome/Solid/FileInvoice')

' renders the element
FileInvoice('FileInvoice', 'File Invoice', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileInvoice
include('fontawesome/Solid/FileInvoice')

' renders the element
FileInvoice('FileInvoice', 'File Invoice', 'an optional tech label', 'an optional description')
@enduml
```

