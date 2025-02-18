# Sepa


```text
simpleicons-14/S/Sepa
```

```text
include('simpleicons-14/S/Sepa')
```



| Illustration | Sepa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sepa.png) | ![illustration for Sepa](../../simpleicons-14/S/Sepa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SepaXs>`
- `<$SepaSm>`
- `<$SepaMd>`
- `<$SepaLg>`





## Sepa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sepa
include('simpleicons-14/S/Sepa')

' renders the element
Sepa('Sepa', 'Sepa', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sepa
include('simpleicons-14/S/Sepa')

' renders the element
Sepa('Sepa', 'Sepa', 'an optional tech label', 'an optional description')
@enduml
```

