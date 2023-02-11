# Nuxtdotjs


```text
simpleicons-8/N/Nuxtdotjs
```

```text
include('simpleicons-8/N/Nuxtdotjs')
```



| Illustration | Nuxtdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Nuxtdotjs.png) | ![illustration for Nuxtdotjs](../../simpleicons-8/N/Nuxtdotjs.Local.png) |




## Nuxtdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Nuxtdotjs
include('simpleicons-8/N/Nuxtdotjs')

' renders the element
Nuxtdotjs('Nuxtdotjs', 'Nuxtdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nuxtdotjs
include('simpleicons-8/N/Nuxtdotjs')

' renders the element
Nuxtdotjs('Nuxtdotjs', 'Nuxtdotjs', 'an optional tech label', 'an optional description')
@enduml
```

