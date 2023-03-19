# Conan


```text
simpleicons-8/C/Conan
```

```text
include('simpleicons-8/C/Conan')
```



| Illustration | Conan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Conan.png) | ![illustration for Conan](../../simpleicons-8/C/Conan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConanXs>`
- `<$ConanSm>`
- `<$ConanMd>`
- `<$ConanLg>`





## Conan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Conan
include('simpleicons-8/C/Conan')

' renders the element
Conan('Conan', 'Conan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Conan
include('simpleicons-8/C/Conan')

' renders the element
Conan('Conan', 'Conan', 'an optional tech label', 'an optional description')
@enduml
```

