# Kde


```text
simpleicons-8/K/Kde
```

```text
include('simpleicons-8/K/Kde')
```



| Illustration | Kde |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kde.png) | ![illustration for Kde](../../simpleicons-8/K/Kde.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KdeXs>`
- `<$KdeSm>`
- `<$KdeMd>`
- `<$KdeLg>`





## Kde

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kde
include('simpleicons-8/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kde
include('simpleicons-8/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label', 'an optional description')
@enduml
```

