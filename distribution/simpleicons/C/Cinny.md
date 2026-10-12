# Cinny


```text
simpleicons/C/Cinny
```

```text
include('simpleicons/C/Cinny')
```



| Illustration | Cinny |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cinny.png) | ![illustration for Cinny](../../simpleicons/C/Cinny.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CinnyXs>`
- `<$CinnySm>`
- `<$CinnyMd>`
- `<$CinnyLg>`





## Cinny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cinny
include('simpleicons/C/Cinny')

' renders the element
Cinny('Cinny', 'Cinny', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cinny
include('simpleicons/C/Cinny')

' renders the element
Cinny('Cinny', 'Cinny', 'an optional tech label', 'an optional description')
@enduml
```

