# Glide


```text
simpleicons/G/Glide
```

```text
include('simpleicons/G/Glide')
```



| Illustration | Glide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Glide.png) | ![illustration for Glide](../../simpleicons/G/Glide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlideXs>`
- `<$GlideSm>`
- `<$GlideMd>`
- `<$GlideLg>`





## Glide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Glide
include('simpleicons/G/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Glide
include('simpleicons/G/Glide')

' renders the element
Glide('Glide', 'Glide', 'an optional tech label', 'an optional description')
@enduml
```

