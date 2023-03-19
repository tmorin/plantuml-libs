# Visa


```text
simpleicons-8/V/Visa
```

```text
include('simpleicons-8/V/Visa')
```



| Illustration | Visa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Visa.png) | ![illustration for Visa](../../simpleicons-8/V/Visa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VisaXs>`
- `<$VisaSm>`
- `<$VisaMd>`
- `<$VisaLg>`





## Visa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Visa
include('simpleicons-8/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Visa
include('simpleicons-8/V/Visa')

' renders the element
Visa('Visa', 'Visa', 'an optional tech label', 'an optional description')
@enduml
```

