# Wikidotjs


```text
simpleicons-6/W/Wikidotjs
```

```text
include('simpleicons-6/W/Wikidotjs')
```



| Illustration | Wikidotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wikidotjs.png) | ![illustration for Wikidotjs](../../simpleicons-6/W/Wikidotjs.Local.png) |




## Wikidotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikidotjs
include('simpleicons-6/W/Wikidotjs')

' renders the element
Wikidotjs('Wikidotjs', 'Wikidotjs', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikidotjs
include('simpleicons-6/W/Wikidotjs')

' renders the element
Wikidotjs('Wikidotjs', 'Wikidotjs', 'an optional tech label')
@enduml
```

