# Cloudfoundry


```text
simpleicons-14/C/Cloudfoundry
```

```text
include('simpleicons-14/C/Cloudfoundry')
```



| Illustration | Cloudfoundry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudfoundry.png) | ![illustration for Cloudfoundry](../../simpleicons-14/C/Cloudfoundry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudfoundryXs>`
- `<$CloudfoundrySm>`
- `<$CloudfoundryMd>`
- `<$CloudfoundryLg>`





## Cloudfoundry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudfoundry
include('simpleicons-14/C/Cloudfoundry')

' renders the element
Cloudfoundry('Cloudfoundry', 'Cloudfoundry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudfoundry
include('simpleicons-14/C/Cloudfoundry')

' renders the element
Cloudfoundry('Cloudfoundry', 'Cloudfoundry', 'an optional tech label', 'an optional description')
@enduml
```

