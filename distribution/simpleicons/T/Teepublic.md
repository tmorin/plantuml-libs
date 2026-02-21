# Teepublic


```text
simpleicons/T/Teepublic
```

```text
include('simpleicons/T/Teepublic')
```



| Illustration | Teepublic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Teepublic.png) | ![illustration for Teepublic](../../simpleicons/T/Teepublic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeepublicXs>`
- `<$TeepublicSm>`
- `<$TeepublicMd>`
- `<$TeepublicLg>`





## Teepublic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Teepublic
include('simpleicons/T/Teepublic')

' renders the element
Teepublic('Teepublic', 'Teepublic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teepublic
include('simpleicons/T/Teepublic')

' renders the element
Teepublic('Teepublic', 'Teepublic', 'an optional tech label', 'an optional description')
@enduml
```

