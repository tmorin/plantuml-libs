# Nuxt


```text
simpleicons-14/N/Nuxt
```

```text
include('simpleicons-14/N/Nuxt')
```



| Illustration | Nuxt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nuxt.png) | ![illustration for Nuxt](../../simpleicons-14/N/Nuxt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NuxtXs>`
- `<$NuxtSm>`
- `<$NuxtMd>`
- `<$NuxtLg>`





## Nuxt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nuxt
include('simpleicons-14/N/Nuxt')

' renders the element
Nuxt('Nuxt', 'Nuxt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nuxt
include('simpleicons-14/N/Nuxt')

' renders the element
Nuxt('Nuxt', 'Nuxt', 'an optional tech label', 'an optional description')
@enduml
```

