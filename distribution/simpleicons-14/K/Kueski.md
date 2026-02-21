# Kueski


```text
simpleicons-14/K/Kueski
```

```text
include('simpleicons-14/K/Kueski')
```



| Illustration | Kueski |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kueski.png) | ![illustration for Kueski](../../simpleicons-14/K/Kueski.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KueskiXs>`
- `<$KueskiSm>`
- `<$KueskiMd>`
- `<$KueskiLg>`





## Kueski

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kueski
include('simpleicons-14/K/Kueski')

' renders the element
Kueski('Kueski', 'Kueski', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kueski
include('simpleicons-14/K/Kueski')

' renders the element
Kueski('Kueski', 'Kueski', 'an optional tech label', 'an optional description')
@enduml
```

