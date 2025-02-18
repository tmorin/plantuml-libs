# Codecov


```text
simpleicons-14/C/Codecov
```

```text
include('simpleicons-14/C/Codecov')
```



| Illustration | Codecov |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codecov.png) | ![illustration for Codecov](../../simpleicons-14/C/Codecov.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodecovXs>`
- `<$CodecovSm>`
- `<$CodecovMd>`
- `<$CodecovLg>`





## Codecov

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codecov
include('simpleicons-14/C/Codecov')

' renders the element
Codecov('Codecov', 'Codecov', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codecov
include('simpleicons-14/C/Codecov')

' renders the element
Codecov('Codecov', 'Codecov', 'an optional tech label', 'an optional description')
@enduml
```

