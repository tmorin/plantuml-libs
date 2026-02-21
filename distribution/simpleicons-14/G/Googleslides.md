# Googleslides


```text
simpleicons-14/G/Googleslides
```

```text
include('simpleicons-14/G/Googleslides')
```



| Illustration | Googleslides |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleslides.png) | ![illustration for Googleslides](../../simpleicons-14/G/Googleslides.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleslides
include('simpleicons-14/G/Googleslides')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleslides
include('simpleicons-14/G/Googleslides')

' renders the element
Googleslides('Googleslides', 'Googleslides', 'an optional tech label', 'an optional description')
@enduml
```

