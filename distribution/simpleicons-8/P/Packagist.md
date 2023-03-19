# Packagist


```text
simpleicons-8/P/Packagist
```

```text
include('simpleicons-8/P/Packagist')
```



| Illustration | Packagist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Packagist.png) | ![illustration for Packagist](../../simpleicons-8/P/Packagist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PackagistXs>`
- `<$PackagistSm>`
- `<$PackagistMd>`
- `<$PackagistLg>`





## Packagist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Packagist
include('simpleicons-8/P/Packagist')

' renders the element
Packagist('Packagist', 'Packagist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Packagist
include('simpleicons-8/P/Packagist')

' renders the element
Packagist('Packagist', 'Packagist', 'an optional tech label', 'an optional description')
@enduml
```

