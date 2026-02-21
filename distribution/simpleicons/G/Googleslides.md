# Googleslides


```text
simpleicons/G/Googleslides
```

```text
include('simpleicons/G/Googleslides')
```



| Illustration | Googleslides |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googleslides.png) | ![illustration for Googleslides](../../simpleicons/G/Googleslides.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleslidesXs>`
- `<$GoogleslidesSm>`
- `<$GoogleslidesMd>`
- `<$GoogleslidesLg>`





## Googleslides

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googleslides
include('simpleicons/G/Googleslides')

' renders the element
Googleslides('Googleslides', 'Googleslides', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleslides
include('simpleicons/G/Googleslides')

' renders the element
Googleslides('Googleslides', 'Googleslides', 'an optional tech label', 'an optional description')
@enduml
```

