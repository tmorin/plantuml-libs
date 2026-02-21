# Drizzle


```text
simpleicons-14/D/Drizzle
```

```text
include('simpleicons-14/D/Drizzle')
```



| Illustration | Drizzle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Drizzle.png) | ![illustration for Drizzle](../../simpleicons-14/D/Drizzle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DrizzleXs>`
- `<$DrizzleSm>`
- `<$DrizzleMd>`
- `<$DrizzleLg>`





## Drizzle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Drizzle
include('simpleicons-14/D/Drizzle')

' renders the element
Drizzle('Drizzle', 'Drizzle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Drizzle
include('simpleicons-14/D/Drizzle')

' renders the element
Drizzle('Drizzle', 'Drizzle', 'an optional tech label', 'an optional description')
@enduml
```

