# Apacheopenoffice


```text
simpleicons/A/Apacheopenoffice
```

```text
include('simpleicons/A/Apacheopenoffice')
```



| Illustration | Apacheopenoffice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apacheopenoffice.png) | ![illustration for Apacheopenoffice](../../simpleicons/A/Apacheopenoffice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheopenofficeXs>`
- `<$ApacheopenofficeSm>`
- `<$ApacheopenofficeMd>`
- `<$ApacheopenofficeLg>`





## Apacheopenoffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apacheopenoffice
include('simpleicons/A/Apacheopenoffice')

' renders the element
Apacheopenoffice('Apacheopenoffice', 'Apacheopenoffice', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apacheopenoffice
include('simpleicons/A/Apacheopenoffice')

' renders the element
Apacheopenoffice('Apacheopenoffice', 'Apacheopenoffice', 'an optional tech label', 'an optional description')
@enduml
```

