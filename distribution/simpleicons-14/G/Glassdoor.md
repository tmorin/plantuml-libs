# Glassdoor


```text
simpleicons-14/G/Glassdoor
```

```text
include('simpleicons-14/G/Glassdoor')
```



| Illustration | Glassdoor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Glassdoor.png) | ![illustration for Glassdoor](../../simpleicons-14/G/Glassdoor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassdoorXs>`
- `<$GlassdoorSm>`
- `<$GlassdoorMd>`
- `<$GlassdoorLg>`





## Glassdoor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Glassdoor
include('simpleicons-14/G/Glassdoor')

' renders the element
Glassdoor('Glassdoor', 'Glassdoor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Glassdoor
include('simpleicons-14/G/Glassdoor')

' renders the element
Glassdoor('Glassdoor', 'Glassdoor', 'an optional tech label', 'an optional description')
@enduml
```

