# Asus


```text
simpleicons-14/A/Asus
```

```text
include('simpleicons-14/A/Asus')
```



| Illustration | Asus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Asus.png) | ![illustration for Asus](../../simpleicons-14/A/Asus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsusXs>`
- `<$AsusSm>`
- `<$AsusMd>`
- `<$AsusLg>`





## Asus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Asus
include('simpleicons-14/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asus
include('simpleicons-14/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label', 'an optional description')
@enduml
```

