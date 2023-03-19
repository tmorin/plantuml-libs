# Scikitlearn


```text
simpleicons-8/S/Scikitlearn
```

```text
include('simpleicons-8/S/Scikitlearn')
```



| Illustration | Scikitlearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scikitlearn.png) | ![illustration for Scikitlearn](../../simpleicons-8/S/Scikitlearn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScikitlearnXs>`
- `<$ScikitlearnSm>`
- `<$ScikitlearnMd>`
- `<$ScikitlearnLg>`





## Scikitlearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scikitlearn
include('simpleicons-8/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scikitlearn
include('simpleicons-8/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label', 'an optional description')
@enduml
```

