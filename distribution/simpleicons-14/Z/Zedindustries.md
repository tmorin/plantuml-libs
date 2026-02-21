# Zedindustries


```text
simpleicons-14/Z/Zedindustries
```

```text
include('simpleicons-14/Z/Zedindustries')
```



| Illustration | Zedindustries |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zedindustries.png) | ![illustration for Zedindustries](../../simpleicons-14/Z/Zedindustries.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZedindustriesXs>`
- `<$ZedindustriesSm>`
- `<$ZedindustriesMd>`
- `<$ZedindustriesLg>`





## Zedindustries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zedindustries
include('simpleicons-14/Z/Zedindustries')

' renders the element
Zedindustries('Zedindustries', 'Zedindustries', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zedindustries
include('simpleicons-14/Z/Zedindustries')

' renders the element
Zedindustries('Zedindustries', 'Zedindustries', 'an optional tech label', 'an optional description')
@enduml
```

