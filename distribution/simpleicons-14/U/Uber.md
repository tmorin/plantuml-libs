# Uber


```text
simpleicons-14/U/Uber
```

```text
include('simpleicons-14/U/Uber')
```



| Illustration | Uber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Uber.png) | ![illustration for Uber](../../simpleicons-14/U/Uber.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UberXs>`
- `<$UberSm>`
- `<$UberMd>`
- `<$UberLg>`





## Uber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Uber
include('simpleicons-14/U/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uber
include('simpleicons-14/U/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label', 'an optional description')
@enduml
```

