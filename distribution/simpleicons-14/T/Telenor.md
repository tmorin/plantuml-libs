# Telenor


```text
simpleicons-14/T/Telenor
```

```text
include('simpleicons-14/T/Telenor')
```



| Illustration | Telenor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Telenor.png) | ![illustration for Telenor](../../simpleicons-14/T/Telenor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TelenorXs>`
- `<$TelenorSm>`
- `<$TelenorMd>`
- `<$TelenorLg>`





## Telenor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Telenor
include('simpleicons-14/T/Telenor')

' renders the element
Telenor('Telenor', 'Telenor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Telenor
include('simpleicons-14/T/Telenor')

' renders the element
Telenor('Telenor', 'Telenor', 'an optional tech label', 'an optional description')
@enduml
```

