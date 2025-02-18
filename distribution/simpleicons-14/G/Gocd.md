# Gocd


```text
simpleicons-14/G/Gocd
```

```text
include('simpleicons-14/G/Gocd')
```



| Illustration | Gocd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gocd.png) | ![illustration for Gocd](../../simpleicons-14/G/Gocd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GocdXs>`
- `<$GocdSm>`
- `<$GocdMd>`
- `<$GocdLg>`





## Gocd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gocd
include('simpleicons-14/G/Gocd')

' renders the element
Gocd('Gocd', 'Gocd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gocd
include('simpleicons-14/G/Gocd')

' renders the element
Gocd('Gocd', 'Gocd', 'an optional tech label', 'an optional description')
@enduml
```

