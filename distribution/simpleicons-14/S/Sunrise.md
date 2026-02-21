# Sunrise


```text
simpleicons-14/S/Sunrise
```

```text
include('simpleicons-14/S/Sunrise')
```



| Illustration | Sunrise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sunrise.png) | ![illustration for Sunrise](../../simpleicons-14/S/Sunrise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SunriseXs>`
- `<$SunriseSm>`
- `<$SunriseMd>`
- `<$SunriseLg>`





## Sunrise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sunrise
include('simpleicons-14/S/Sunrise')

' renders the element
Sunrise('Sunrise', 'Sunrise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sunrise
include('simpleicons-14/S/Sunrise')

' renders the element
Sunrise('Sunrise', 'Sunrise', 'an optional tech label', 'an optional description')
@enduml
```

