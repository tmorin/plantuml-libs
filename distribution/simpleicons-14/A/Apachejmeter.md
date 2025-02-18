# Apachejmeter


```text
simpleicons-14/A/Apachejmeter
```

```text
include('simpleicons-14/A/Apachejmeter')
```



| Illustration | Apachejmeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachejmeter.png) | ![illustration for Apachejmeter](../../simpleicons-14/A/Apachejmeter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachejmeterXs>`
- `<$ApachejmeterSm>`
- `<$ApachejmeterMd>`
- `<$ApachejmeterLg>`





## Apachejmeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachejmeter
include('simpleicons-14/A/Apachejmeter')

' renders the element
Apachejmeter('Apachejmeter', 'Apachejmeter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachejmeter
include('simpleicons-14/A/Apachejmeter')

' renders the element
Apachejmeter('Apachejmeter', 'Apachejmeter', 'an optional tech label', 'an optional description')
@enduml
```

