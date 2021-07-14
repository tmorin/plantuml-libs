# Emberdotjs


```text
simpleicons-5/E/Emberdotjs
```

```text
include('simpleicons-5/E/Emberdotjs')
```



| Illustration | Emberdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Emberdotjs.png) | ![illustration for Emberdotjs](../../simpleicons-5/E/Emberdotjs.Local.png) |




## Emberdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Emberdotjs
include('simpleicons-5/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Emberdotjs
include('simpleicons-5/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label')
@enduml
```

