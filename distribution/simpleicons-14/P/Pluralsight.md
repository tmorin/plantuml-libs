# Pluralsight


```text
simpleicons-14/P/Pluralsight
```

```text
include('simpleicons-14/P/Pluralsight')
```



| Illustration | Pluralsight |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pluralsight.png) | ![illustration for Pluralsight](../../simpleicons-14/P/Pluralsight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PluralsightXs>`
- `<$PluralsightSm>`
- `<$PluralsightMd>`
- `<$PluralsightLg>`





## Pluralsight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pluralsight
include('simpleicons-14/P/Pluralsight')

' renders the element
Pluralsight('Pluralsight', 'Pluralsight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pluralsight
include('simpleicons-14/P/Pluralsight')

' renders the element
Pluralsight('Pluralsight', 'Pluralsight', 'an optional tech label', 'an optional description')
@enduml
```

