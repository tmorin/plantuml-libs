# Bereal


```text
simpleicons-14/B/Bereal
```

```text
include('simpleicons-14/B/Bereal')
```



| Illustration | Bereal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bereal.png) | ![illustration for Bereal](../../simpleicons-14/B/Bereal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BerealXs>`
- `<$BerealSm>`
- `<$BerealMd>`
- `<$BerealLg>`





## Bereal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bereal
include('simpleicons-14/B/Bereal')

' renders the element
Bereal('Bereal', 'Bereal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bereal
include('simpleicons-14/B/Bereal')

' renders the element
Bereal('Bereal', 'Bereal', 'an optional tech label', 'an optional description')
@enduml
```

