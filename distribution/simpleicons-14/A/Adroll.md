# Adroll


```text
simpleicons-14/A/Adroll
```

```text
include('simpleicons-14/A/Adroll')
```



| Illustration | Adroll |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adroll.png) | ![illustration for Adroll](../../simpleicons-14/A/Adroll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdrollXs>`
- `<$AdrollSm>`
- `<$AdrollMd>`
- `<$AdrollLg>`





## Adroll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adroll
include('simpleicons-14/A/Adroll')

' renders the element
Adroll('Adroll', 'Adroll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adroll
include('simpleicons-14/A/Adroll')

' renders the element
Adroll('Adroll', 'Adroll', 'an optional tech label', 'an optional description')
@enduml
```

