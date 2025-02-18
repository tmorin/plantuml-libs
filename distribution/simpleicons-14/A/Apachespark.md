# Apachespark


```text
simpleicons-14/A/Apachespark
```

```text
include('simpleicons-14/A/Apachespark')
```



| Illustration | Apachespark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachespark.png) | ![illustration for Apachespark](../../simpleicons-14/A/Apachespark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachesparkXs>`
- `<$ApachesparkSm>`
- `<$ApachesparkMd>`
- `<$ApachesparkLg>`





## Apachespark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachespark
include('simpleicons-14/A/Apachespark')

' renders the element
Apachespark('Apachespark', 'Apachespark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachespark
include('simpleicons-14/A/Apachespark')

' renders the element
Apachespark('Apachespark', 'Apachespark', 'an optional tech label', 'an optional description')
@enduml
```

