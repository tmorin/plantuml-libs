# Vueuse


```text
simpleicons/V/Vueuse
```

```text
include('simpleicons/V/Vueuse')
```



| Illustration | Vueuse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vueuse.png) | ![illustration for Vueuse](../../simpleicons/V/Vueuse.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vueuse
include('simpleicons/V/Vueuse')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vueuse
include('simpleicons/V/Vueuse')

' renders the element
Vueuse('Vueuse', 'Vueuse', 'an optional tech label', 'an optional description')
@enduml
```

