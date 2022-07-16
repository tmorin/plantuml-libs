# Brandfolder


```text
simpleicons-7/B/Brandfolder
```

```text
include('simpleicons-7/B/Brandfolder')
```



| Illustration | Brandfolder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Brandfolder.png) | ![illustration for Brandfolder](../../simpleicons-7/B/Brandfolder.Local.png) |




## Brandfolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Brandfolder
include('simpleicons-7/B/Brandfolder')

' renders the element
Brandfolder('Brandfolder', 'Brandfolder', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Brandfolder
include('simpleicons-7/B/Brandfolder')

' renders the element
Brandfolder('Brandfolder', 'Brandfolder', 'an optional tech label')
@enduml
```

