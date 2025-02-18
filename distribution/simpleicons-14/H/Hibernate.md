# Hibernate


```text
simpleicons-14/H/Hibernate
```

```text
include('simpleicons-14/H/Hibernate')
```



| Illustration | Hibernate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hibernate.png) | ![illustration for Hibernate](../../simpleicons-14/H/Hibernate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HibernateXs>`
- `<$HibernateSm>`
- `<$HibernateMd>`
- `<$HibernateLg>`





## Hibernate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hibernate
include('simpleicons-14/H/Hibernate')

' renders the element
Hibernate('Hibernate', 'Hibernate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hibernate
include('simpleicons-14/H/Hibernate')

' renders the element
Hibernate('Hibernate', 'Hibernate', 'an optional tech label', 'an optional description')
@enduml
```

