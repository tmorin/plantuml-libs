# Freelancermap


```text
simpleicons-14/F/Freelancermap
```

```text
include('simpleicons-14/F/Freelancermap')
```



| Illustration | Freelancermap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freelancermap.png) | ![illustration for Freelancermap](../../simpleicons-14/F/Freelancermap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreelancermapXs>`
- `<$FreelancermapSm>`
- `<$FreelancermapMd>`
- `<$FreelancermapLg>`





## Freelancermap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freelancermap
include('simpleicons-14/F/Freelancermap')

' renders the element
Freelancermap('Freelancermap', 'Freelancermap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freelancermap
include('simpleicons-14/F/Freelancermap')

' renders the element
Freelancermap('Freelancermap', 'Freelancermap', 'an optional tech label', 'an optional description')
@enduml
```

