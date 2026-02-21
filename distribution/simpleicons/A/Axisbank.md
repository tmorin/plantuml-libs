# Axisbank


```text
simpleicons/A/Axisbank
```

```text
include('simpleicons/A/Axisbank')
```



| Illustration | Axisbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Axisbank.png) | ![illustration for Axisbank](../../simpleicons/A/Axisbank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AxisbankXs>`
- `<$AxisbankSm>`
- `<$AxisbankMd>`
- `<$AxisbankLg>`





## Axisbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Axisbank
include('simpleicons/A/Axisbank')

' renders the element
Axisbank('Axisbank', 'Axisbank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Axisbank
include('simpleicons/A/Axisbank')

' renders the element
Axisbank('Axisbank', 'Axisbank', 'an optional tech label', 'an optional description')
@enduml
```

