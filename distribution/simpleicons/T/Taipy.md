# Taipy


```text
simpleicons/T/Taipy
```

```text
include('simpleicons/T/Taipy')
```



| Illustration | Taipy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Taipy.png) | ![illustration for Taipy](../../simpleicons/T/Taipy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaipyXs>`
- `<$TaipySm>`
- `<$TaipyMd>`
- `<$TaipyLg>`





## Taipy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Taipy
include('simpleicons/T/Taipy')

' renders the element
Taipy('Taipy', 'Taipy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Taipy
include('simpleicons/T/Taipy')

' renders the element
Taipy('Taipy', 'Taipy', 'an optional tech label', 'an optional description')
@enduml
```

