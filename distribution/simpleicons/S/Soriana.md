# Soriana


```text
simpleicons/S/Soriana
```

```text
include('simpleicons/S/Soriana')
```



| Illustration | Soriana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Soriana.png) | ![illustration for Soriana](../../simpleicons/S/Soriana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SorianaXs>`
- `<$SorianaSm>`
- `<$SorianaMd>`
- `<$SorianaLg>`





## Soriana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Soriana
include('simpleicons/S/Soriana')

' renders the element
Soriana('Soriana', 'Soriana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Soriana
include('simpleicons/S/Soriana')

' renders the element
Soriana('Soriana', 'Soriana', 'an optional tech label', 'an optional description')
@enduml
```

