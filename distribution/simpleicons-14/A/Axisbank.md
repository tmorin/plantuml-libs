# Axisbank


```text
simpleicons-14/A/Axisbank
```

```text
include('simpleicons-14/A/Axisbank')
```



| Illustration | Axisbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Axisbank.png) | ![illustration for Axisbank](../../simpleicons-14/A/Axisbank.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Axisbank
include('simpleicons-14/A/Axisbank')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Axisbank
include('simpleicons-14/A/Axisbank')

' renders the element
Axisbank('Axisbank', 'Axisbank', 'an optional tech label', 'an optional description')
@enduml
```

