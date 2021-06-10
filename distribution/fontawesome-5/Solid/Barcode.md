# Barcode


```text
fontawesome-5/Solid/Barcode
```

```text
include('fontawesome-5/Solid/Barcode')
```



| Illustration | Barcode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Barcode.png) | ![illustration for Barcode](../../fontawesome-5/Solid/Barcode.Local.png) |




## Barcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Barcode
include('fontawesome-5/Solid/Barcode')

' renders the element
Barcode('Barcode', 'Barcode', 'an optional tech label')
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

' loads the Item which embeds the element Barcode
include('fontawesome-5/Solid/Barcode')

' renders the element
Barcode('Barcode', 'Barcode', 'an optional tech label')
@enduml
```

