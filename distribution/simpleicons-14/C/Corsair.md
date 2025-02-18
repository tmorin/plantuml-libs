# Corsair


```text
simpleicons-14/C/Corsair
```

```text
include('simpleicons-14/C/Corsair')
```



| Illustration | Corsair |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Corsair.png) | ![illustration for Corsair](../../simpleicons-14/C/Corsair.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CorsairXs>`
- `<$CorsairSm>`
- `<$CorsairMd>`
- `<$CorsairLg>`





## Corsair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Corsair
include('simpleicons-14/C/Corsair')

' renders the element
Corsair('Corsair', 'Corsair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Corsair
include('simpleicons-14/C/Corsair')

' renders the element
Corsair('Corsair', 'Corsair', 'an optional tech label', 'an optional description')
@enduml
```

