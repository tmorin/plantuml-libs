# Vueuse


```text
simpleicons-14/V/Vueuse
```

```text
include('simpleicons-14/V/Vueuse')
```



| Illustration | Vueuse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vueuse.png) | ![illustration for Vueuse](../../simpleicons-14/V/Vueuse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VueuseXs>`
- `<$VueuseSm>`
- `<$VueuseMd>`
- `<$VueuseLg>`





## Vueuse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vueuse
include('simpleicons-14/V/Vueuse')

' renders the element
Vueuse('Vueuse', 'Vueuse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vueuse
include('simpleicons-14/V/Vueuse')

' renders the element
Vueuse('Vueuse', 'Vueuse', 'an optional tech label', 'an optional description')
@enduml
```

