# Paloaltonetworks


```text
simpleicons-14/P/Paloaltonetworks
```

```text
include('simpleicons-14/P/Paloaltonetworks')
```



| Illustration | Paloaltonetworks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paloaltonetworks.png) | ![illustration for Paloaltonetworks](../../simpleicons-14/P/Paloaltonetworks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaloaltonetworksXs>`
- `<$PaloaltonetworksSm>`
- `<$PaloaltonetworksMd>`
- `<$PaloaltonetworksLg>`





## Paloaltonetworks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paloaltonetworks
include('simpleicons-14/P/Paloaltonetworks')

' renders the element
Paloaltonetworks('Paloaltonetworks', 'Paloaltonetworks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paloaltonetworks
include('simpleicons-14/P/Paloaltonetworks')

' renders the element
Paloaltonetworks('Paloaltonetworks', 'Paloaltonetworks', 'an optional tech label', 'an optional description')
@enduml
```

