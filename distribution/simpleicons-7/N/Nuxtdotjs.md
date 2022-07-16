# Nuxtdotjs


```text
simpleicons-7/N/Nuxtdotjs
```

```text
include('simpleicons-7/N/Nuxtdotjs')
```



| Illustration | Nuxtdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nuxtdotjs.png) | ![illustration for Nuxtdotjs](../../simpleicons-7/N/Nuxtdotjs.Local.png) |




## Nuxtdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nuxtdotjs
include('simpleicons-7/N/Nuxtdotjs')

' renders the element
Nuxtdotjs('Nuxtdotjs', 'Nuxtdotjs', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nuxtdotjs
include('simpleicons-7/N/Nuxtdotjs')

' renders the element
Nuxtdotjs('Nuxtdotjs', 'Nuxtdotjs', 'an optional tech label')
@enduml
```

